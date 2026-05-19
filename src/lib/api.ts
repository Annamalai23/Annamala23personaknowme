import type { z } from "zod";

export type ApiError = {
  error: string;
  status: number;
  issues?: z.ZodIssue[];
};

function jsonResponse(body: unknown, status: number): Response {
  return Response.json(body, { status });
}

export function ok<T>(data: T): Response {
  return jsonResponse(data, 200);
}

export function fail(error: string, status: number, issues?: z.ZodIssue[]): Response {
  const body: ApiError = { error, status, ...(issues && { issues }) };
  return jsonResponse(body, status);
}

export async function parseJsonBody<T extends z.ZodType>(
  request: Request,
  schema: T,
): Promise<{ data: z.infer<T> } | { error: Response }> {
  const contentType = request.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) {
    return { error: fail("Content-Type must be application/json", 415) };
  }

  let raw: unknown;
  try {
    raw = await request.json();
  } catch {
    return { error: fail("Malformed JSON body", 400) };
  }

  const parsed = schema.safeParse(raw);
  if (!parsed.success) {
    return { error: fail("Validation failed", 422, parsed.error.issues) };
  }

  return { data: parsed.data };
}

export function requireEnv(key: string): string | Response {
  const value = process.env[key];
  if (!value) {
    console.error(`Missing required env var: ${key}`);
    return fail("Internal server error", 500);
  }
  return value;
}

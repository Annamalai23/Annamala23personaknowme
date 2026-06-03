export function buildEmailHtml(
  name: string,
  email: string,
  subject: string,
  message: string,
): string {
  return `
    <div style="font-family:monospace;max-width:600px;margin:0 auto;padding:24px;border:1px solid #d0d7de;border-radius:8px;">
      <h2 style="margin:0 0 4px;font-size:16px;color:#24292f;">New message via annamalai.dev</h2>
      <p style="margin:0 0 20px;font-size:12px;color:#6e7781;">Contact form submission</p>
      <table style="width:100%;border-collapse:collapse;font-size:13px;margin-bottom:20px;">
        <tr>
          <td style="padding:8px 0;color:#6e7781;width:80px;vertical-align:top;">From</td>
          <td style="padding:8px 0;color:#24292f;">${name} &lt;${email}&gt;</td>
        </tr>
        <tr>
          <td style="padding:8px 0;color:#6e7781;vertical-align:top;">Subject</td>
          <td style="padding:8px 0;color:#24292f;">${subject}</td>
        </tr>
      </table>
      <hr style="margin:0 0 20px;border:none;border-top:1px solid #d0d7de;" />
      <p style="font-size:14px;line-height:1.8;color:#24292f;white-space:pre-wrap;margin:0;">${message}</p>
    </div>
  `;
}

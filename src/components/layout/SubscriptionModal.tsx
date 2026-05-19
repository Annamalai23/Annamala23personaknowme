import { Modal } from "@/components/ds/Modal";
import { Button } from "@/components/ds/Button";
import { useAppStore } from "@/lib/store";
import { Inbox } from "lucide-react";
import { Icon } from "@/components/ds/Icon";
import { useState } from "react";

export function SubscriptionModal() {
  const open = useAppStore((s) => s.subscriptionModalOpen);
  const close = useAppStore((s) => s.closeSubscription);
  const email = useAppStore((s) => s.subscriptionEmail);
  const [confirmed, setConfirmed] = useState(false);

  return (
    <Modal open={open} onClose={close} title="SUBSCRIPTION_VERIFICATION.MD">
      <div className="flex flex-col items-center text-center">
        <div className="grid h-14 w-14 place-items-center rounded-lg bg-secondary">
          <Icon icon={Inbox} size="lg" className="text-[color:var(--brand-secondary)]" />
        </div>
        <h3 className="mt-5 font-mono text-base text-foreground">
          {confirmed ? "Subscription confirmed." : "Would you like to confirm your subscription?"}
        </h3>
        <p className="mt-3 font-mono text-sm text-muted-foreground">The email entered:</p>
        <p className="mt-1 font-mono text-sm text-[color:var(--brand-secondary)]">{email || "you@example.com"}</p>
        <Button
          variant="primary"
          className="mt-6 w-full"
          onClick={() => {
            setConfirmed(true);
            setTimeout(() => {
              setConfirmed(false);
              close();
            }, 1200);
          }}
        >
          {confirmed ? "✓ confirmed" : "> confirm_subscription"}
        </Button>
        <button
          onClick={close}
          className="mt-3 font-mono text-xs uppercase tracking-wider text-muted-foreground hover:text-foreground"
        >
          ABORT
        </button>
      </div>
    </Modal>
  );
}

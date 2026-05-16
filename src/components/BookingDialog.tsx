import { useEffect, useMemo, useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  type Therapist,
  getAvailability,
  formatDay,
} from "@/data/therapists";

const bookingSchema = z.object({
  name: z.string().trim().min(2, "Enter your full name").max(80),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().min(7, "Enter a valid phone").max(20),
  address: z.string().trim().min(5, "Enter your address").max(200),
  notes: z.string().trim().max(500).optional(),
});

type Step = "slot" | "details" | "confirmed";

type Props = {
  therapist: Therapist | null;
  open: boolean;
  onOpenChange: (o: boolean) => void;
};

export function BookingDialog({ therapist, open, onOpenChange }: Props) {
  const [step, setStep] = useState<Step>("slot");
  const [dayIdx, setDayIdx] = useState(0);
  const [slot, setSlot] = useState<{ hour: number; label: string } | null>(null);
  const [form, setForm] = useState({ name: "", email: "", phone: "", address: "", notes: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const availability = useMemo(
    () => (therapist ? getAvailability(therapist) : []),
    [therapist],
  );

  useEffect(() => {
    if (open) {
      setStep("slot");
      setSlot(null);
      setDayIdx(availability.findIndex((d) => d.slots.length > 0));
      setErrors({});
    }
  }, [open, availability]);

  if (!therapist) return null;

  const activeDay = availability[dayIdx];

  function handleConfirm() {
    const result = bookingSchema.safeParse(form);
    if (!result.success) {
      const errs: Record<string, string> = {};
      for (const issue of result.error.issues) {
        errs[issue.path[0] as string] = issue.message;
      }
      setErrors(errs);
      return;
    }
    setErrors({});
    setStep("confirmed");
    toast.success("Session confirmed", {
      description: `${therapist!.name} · ${formatDay(activeDay.date)} at ${slot?.label}`,
    });
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl bg-background border-border p-0 gap-0 overflow-hidden">
        {/* Header */}
        <DialogHeader className="px-8 pt-8 pb-6 border-b border-border">
          <div className="flex items-center gap-4">
            <img
              src={therapist.image}
              alt={therapist.name}
              className="size-14 object-cover grayscale"
            />
            <div>
              <DialogTitle className="font-display text-2xl font-bold uppercase tracking-tight">
                Book {therapist.name}
              </DialogTitle>
              <DialogDescription className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground mt-1">
                {therapist.specialty} · ${therapist.price} / session
              </DialogDescription>
            </div>
            <div className="ml-auto flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground">
              <StepDot active={step === "slot"} done={step !== "slot"} label="01 Slot" />
              <span className="text-border">—</span>
              <StepDot
                active={step === "details"}
                done={step === "confirmed"}
                label="02 Details"
              />
              <span className="text-border">—</span>
              <StepDot active={step === "confirmed"} done={false} label="03 Confirm" />
            </div>
          </div>
        </DialogHeader>

        {/* Step content */}
        {step === "slot" && (
          <div className="px-8 py-8 max-h-[60vh] overflow-y-auto">
            <h3 className="text-[10px] uppercase tracking-[0.25em] font-bold text-muted-foreground mb-4">
              Choose a date
            </h3>
            <div className="flex gap-2 overflow-x-auto pb-2 -mx-1 px-1">
              {availability.map((d, i) => {
                const isActive = i === dayIdx;
                const disabled = d.slots.length === 0;
                return (
                  <button
                    key={i}
                    disabled={disabled}
                    onClick={() => {
                      setDayIdx(i);
                      setSlot(null);
                    }}
                    className={`shrink-0 px-4 py-3 border text-left transition-all ${
                      isActive
                        ? "border-primary text-primary"
                        : disabled
                          ? "border-border text-muted-foreground/40 cursor-not-allowed"
                          : "border-border hover:border-foreground"
                    }`}
                  >
                    <div className="text-[9px] uppercase tracking-widest font-bold">
                      {d.date.toLocaleDateString("en-US", { weekday: "short" })}
                    </div>
                    <div className="font-display text-lg font-bold leading-none mt-1">
                      {d.date.getDate()}
                    </div>
                    <div className="text-[9px] uppercase tracking-widest text-muted-foreground mt-1">
                      {d.slots.length === 0 ? "Full" : `${d.slots.length} slots`}
                    </div>
                  </button>
                );
              })}
            </div>

            <h3 className="text-[10px] uppercase tracking-[0.25em] font-bold text-muted-foreground mt-10 mb-4">
              Choose a time · {activeDay ? formatDay(activeDay.date) : ""}
            </h3>
            {activeDay && activeDay.slots.length > 0 ? (
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                {activeDay.slots.map((s) => {
                  const on = slot?.hour === s.hour;
                  return (
                    <button
                      key={s.hour}
                      onClick={() => setSlot(s)}
                      className={`py-3 border text-sm font-semibold transition-all ${
                        on
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border hover:border-foreground"
                      }`}
                    >
                      {s.label}
                    </button>
                  );
                })}
              </div>
            ) : (
              <p className="text-muted-foreground text-sm">No availability on this day.</p>
            )}

            <div className="mt-10 flex justify-end">
              <button
                disabled={!slot}
                onClick={() => setStep("details")}
                className="px-7 py-4 bg-primary text-primary-foreground text-[11px] font-bold uppercase tracking-[0.25em] disabled:opacity-30 disabled:cursor-not-allowed hover:brightness-110 transition-all"
              >
                Continue →
              </button>
            </div>
          </div>
        )}

        {step === "details" && (
          <div className="px-8 py-8 max-h-[60vh] overflow-y-auto">
            <div className="mb-8 p-4 border border-border bg-surface flex items-center justify-between">
              <div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Selected slot
                </div>
                <div className="font-display text-lg font-bold uppercase tracking-tight mt-1">
                  {formatDay(activeDay.date)} · {slot?.label}
                </div>
              </div>
              <button
                onClick={() => setStep("slot")}
                className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary hover:underline"
              >
                Change
              </button>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Full name" error={errors.name}>
                <input
                  value={form.name}
                  maxLength={80}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="input-bare"
                />
              </Field>
              <Field label="Email" error={errors.email}>
                <input
                  type="email"
                  value={form.email}
                  maxLength={255}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="input-bare"
                />
              </Field>
              <Field label="Phone" error={errors.phone}>
                <input
                  value={form.phone}
                  maxLength={20}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="input-bare"
                />
              </Field>
              <Field label="Home address" error={errors.address}>
                <input
                  value={form.address}
                  maxLength={200}
                  onChange={(e) => setForm({ ...form, address: e.target.value })}
                  className="input-bare"
                />
              </Field>
              <div className="sm:col-span-2">
                <Field label="Notes for the therapist (optional)" error={errors.notes}>
                  <textarea
                    rows={3}
                    value={form.notes}
                    maxLength={500}
                    onChange={(e) => setForm({ ...form, notes: e.target.value })}
                    className="input-bare resize-none"
                  />
                </Field>
              </div>
            </div>

            <div className="mt-10 flex items-center justify-between">
              <button
                onClick={() => setStep("slot")}
                className="text-[11px] font-bold uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition-colors"
              >
                ← Back
              </button>
              <button
                onClick={handleConfirm}
                className="px-7 py-4 bg-primary text-primary-foreground text-[11px] font-bold uppercase tracking-[0.25em] hover:brightness-110 transition-all"
              >
                Confirm Booking · ${therapist.price}
              </button>
            </div>
          </div>
        )}

        {step === "confirmed" && (
          <div className="px-8 py-16 text-center">
            <div className="mx-auto size-16 grid place-items-center bg-primary text-primary-foreground rounded-full font-display text-2xl font-bold mb-8">
              ✓
            </div>
            <h3 className="font-display text-3xl md:text-4xl font-extrabold uppercase tracking-tighter">
              You're <span className="italic text-muted-foreground font-medium">booked.</span>
            </h3>
            <p className="mt-4 text-muted-foreground max-w-md mx-auto">
              {therapist.name} will visit you on{" "}
              <span className="text-foreground font-semibold">
                {formatDay(activeDay.date)} at {slot?.label}
              </span>
              . Confirmation sent to{" "}
              <span className="text-foreground font-semibold">{form.email}</span>.
            </p>
            <button
              onClick={() => onOpenChange(false)}
              className="mt-10 px-7 py-4 border border-foreground text-[11px] font-bold uppercase tracking-[0.25em] hover:bg-foreground hover:text-background transition-all"
            >
              Done
            </button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

function StepDot({ active, done, label }: { active: boolean; done: boolean; label: string }) {
  return (
    <span
      className={
        active ? "text-primary" : done ? "text-foreground" : "text-muted-foreground/50"
      }
    >
      {label}
    </span>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="block text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground mb-2">
        {label}
      </span>
      {children}
      {error && <span className="block text-[11px] text-primary mt-2">{error}</span>}
    </label>
  );
}

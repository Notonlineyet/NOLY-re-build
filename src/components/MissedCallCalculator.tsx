"use client";

import { useId, useMemo, useState } from "react";

const formatGBP = (value: number) =>
  new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    maximumFractionDigits: 0,
  }).format(value);

function Slider({
  label,
  value,
  min,
  max,
  step,
  displayValue,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  displayValue: string;
  onChange: (value: number) => void;
}) {
  const id = useId();
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-baseline justify-between">
        <label htmlFor={id} className="text-sm text-text-muted">
          {label}
        </label>
        <span className="font-mono text-sm text-text">{displayValue}</span>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-white/10 accent-accent"
      />
    </div>
  );
}

export function MissedCallCalculator() {
  const [missedCallsPerWeek, setMissedCallsPerWeek] = useState(5);
  const [avgJobValue, setAvgJobValue] = useState(500);
  const [closeRate, setCloseRate] = useState(20);

  const annualLostRevenue = useMemo(() => {
    return Math.round(
      missedCallsPerWeek * 52 * avgJobValue * (closeRate / 100)
    );
  }, [missedCallsPerWeek, avgJobValue, closeRate]);

  return (
    <div className="rounded-2xl border border-glass-border bg-glass p-6 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:p-8">
      <div className="mb-6">
        <h3 className="text-base font-semibold text-text">
          Missed call calculator
        </h3>
        <p className="mt-1 text-sm text-text-muted">
          See what unanswered calls could be costing you a year.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        <Slider
          label="Missed calls per week"
          value={missedCallsPerWeek}
          min={0}
          max={30}
          step={1}
          displayValue={String(missedCallsPerWeek)}
          onChange={setMissedCallsPerWeek}
        />
        <Slider
          label="Average job value"
          value={avgJobValue}
          min={50}
          max={3000}
          step={50}
          displayValue={formatGBP(avgJobValue)}
          onChange={setAvgJobValue}
        />
        <Slider
          label="Estimated close rate"
          value={closeRate}
          min={5}
          max={80}
          step={5}
          displayValue={`${closeRate}%`}
          onChange={setCloseRate}
        />
      </div>

      <div className="mt-8 rounded-xl border border-accent-strong/20 bg-gradient-to-br from-accent/15 to-accent-strong/5 p-5">
        <p className="text-xs text-text-muted">
          Estimated annual lost revenue
        </p>
        <p className="mt-1 font-mono text-4xl font-semibold tracking-tight text-accent-strong">
          {formatGBP(annualLostRevenue)}
        </p>
        <p className="mt-2 text-xs text-text-faint">
          Based on jobs lost to calls that were never answered.
        </p>
      </div>
    </div>
  );
}

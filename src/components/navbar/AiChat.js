"use client";

import { useState, useRef, useEffect } from "react";

const GOLD = "#c9a84c";
const GOLD_LIGHT = "#f0d98a";

export default function AIChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Good evening. I'm your personal concierge. How may I assist with your journey today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [pulse, setPulse] = useState(true);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  // Stop pulsing after first open
  useEffect(() => {
    if (open) setPulse(false);
  }, [open]);

  // Auto-scroll to bottom
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  // Focus input when opened
  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 300);
  }, [open]);

  async function sendMessage() {
    const text = input.trim();
    if (!text || loading) return;

    const newMessages = [...messages, { role: "user", content: text }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          system:
            "You are an elite luxury chauffeur concierge for a premium London car service. You are polished, warm, and efficient. Help clients with bookings, pricing, airport transfers, vehicle choices, and travel questions. Keep responses concise and refined — never more than 3 sentences unless essential. Always reflect the brand: world-class, discreet, impeccable.",
          messages: newMessages.map((m) => ({ role: m.role, content: m.content })),
        }),
      });

      const data = await response.json();
      const reply = data.content?.[0]?.text || "I apologise — something went wrong. Please try again.";
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "My apologies — I'm temporarily unavailable. Please call us directly." },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function handleKey(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }

  return (
    <>
      <style>{`
        @keyframes floatIn {
          from { opacity: 0; transform: translateY(20px) scale(0.95); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes pulseRing {
          0%   { transform: scale(1);   opacity: 0.6; }
          70%  { transform: scale(1.5); opacity: 0; }
          100% { transform: scale(1.5); opacity: 0; }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        @keyframes dotBounce {
          0%, 80%, 100% { transform: translateY(0); opacity: 0.4; }
          40%            { transform: translateY(-5px); opacity: 1; }
        }
        .ai-chat-window {
          animation: floatIn 0.35s cubic-bezier(0.34,1.56,0.64,1) forwards;
        }
        .gold-shimmer {
          background: linear-gradient(90deg, ${GOLD}, ${GOLD_LIGHT}, ${GOLD});
          background-size: 200% auto;
          animation: shimmer 2.5s linear infinite;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .dot { animation: dotBounce 1.2s ease-in-out infinite; }
        .dot:nth-child(2) { animation-delay: 0.2s; }
        .dot:nth-child(3) { animation-delay: 0.4s; }
        .msg-enter {
          animation: floatIn 0.25s ease forwards;
        }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(201,168,76,0.3); border-radius: 2px; }
      `}</style>

      {/* ── Floating button ── */}
      <div
        style={{
          position: "fixed",
          bottom: "clamp(20px, 4vw, 32px)",
          right: "clamp(16px, 4vw, 32px)",
          zIndex: 9999,
        }}
      >
        {/* Pulse ring (before first open) */}
        {pulse && (
          <span
            style={{
              position: "absolute", inset: 0, borderRadius: "50%",
              border: `2px solid ${GOLD}`,
              animation: "pulseRing 2s ease-out infinite",
              pointerEvents: "none",
            }}
          />
        )}

        <button
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close AI chat" : "Open AI concierge chat"}
          style={{
            width: "clamp(52px, 8vw, 62px)",
            height: "clamp(52px, 8vw, 62px)",
            borderRadius: "50%",
            border: "1px solid rgba(201,168,76,0.5)",
            background: open
              ? "rgba(10,12,16,0.95)"
              : `linear-gradient(135deg, #0a0c10 0%, #1a1608 100%)`,
            boxShadow: open
              ? `0 0 0 1px ${GOLD}55, 0 8px 32px rgba(0,0,0,0.6)`
              : `0 0 28px rgba(201,168,76,0.4), 0 4px 16px rgba(0,0,0,0.5)`,
            cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center",
            transition: "all 0.3s ease",
            flexShrink: 0,
          }}
        >
          {open ? (
            /* X icon */
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M2 2l14 14M16 2L2 16" stroke={GOLD} strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          ) : (
            /* Sparkle / AI icon */
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 2v2M12 20v2M2 12h2M20 12h2" stroke={GOLD} strokeWidth="1.5" strokeLinecap="round" />
              <circle cx="12" cy="12" r="4" stroke={GOLD} strokeWidth="1.5" />
              <path d="M12 8c0-2 1.5-3 1.5-3M12 16c0 2-1.5 3-1.5 3" stroke={GOLD_LIGHT} strokeWidth="1" strokeLinecap="round" opacity="0.6" />
              <circle cx="12" cy="12" r="1.5" fill={GOLD} />
            </svg>
          )}
        </button>

        {/* Unread dot */}
        {!open && (
          <span style={{
            position: "absolute", top: "4px", right: "4px",
            width: "9px", height: "9px", borderRadius: "50%",
            background: GOLD, border: "2px solid #0a0c10",
          }} />
        )}
      </div>

      {/* ── Chat window ── */}
      {open && (
        <div
          className="ai-chat-window"
          style={{
            position: "fixed",
            bottom: `calc(clamp(20px,4vw,32px) + clamp(52px,8vw,62px) + 14px)`,
            right: "clamp(16px, 4vw, 32px)",
            zIndex: 9998,
            width: "clamp(300px, 90vw, 400px)",
            maxHeight: "clamp(420px, 75vh, 600px)",
            display: "flex",
            flexDirection: "column",
            borderRadius: "20px",
            overflow: "hidden",
            background: "rgba(8,10,14,0.97)",
            border: "1px solid rgba(201,168,76,0.25)",
            boxShadow: "0 32px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(201,168,76,0.1), inset 0 1px 0 rgba(201,168,76,0.15)",
            backdropFilter: "blur(20px)",
          }}
        >
          {/* Header */}
          <div style={{
            padding: "16px 20px",
            borderBottom: "1px solid rgba(201,168,76,0.15)",
            background: "linear-gradient(180deg, rgba(201,168,76,0.07) 0%, transparent 100%)",
            display: "flex", alignItems: "center", gap: "12px", flexShrink: 0,
          }}>
            <div style={{
              width: "36px", height: "36px", borderRadius: "50%",
              background: "linear-gradient(135deg, #1a1608, #0a0c10)",
              border: `1px solid ${GOLD}55`,
              display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="4" stroke={GOLD} strokeWidth="1.5" />
                <path d="M12 2v2M12 20v2M2 12h2M20 12h2" stroke={GOLD} strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="12" cy="12" r="1.5" fill={GOLD} />
              </svg>
            </div>
            <div>
              <p className="gold-shimmer" style={{ fontSize: "13px", fontWeight: "700", letterSpacing: "0.08em", fontFamily: "Georgia, serif", marginBottom: "1px" }}>
                AI Concierge
              </p>
              <p style={{ fontSize: "10px", color: "rgba(255,255,255,0.4)", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                <span style={{ display: "inline-block", width: "6px", height: "6px", borderRadius: "50%", background: "#4ade80", marginRight: "5px", verticalAlign: "middle" }} />
                Online · Luxury Chauffeur
              </p>
            </div>
          </div>

          {/* Messages */}
          <div style={{
            flex: 1, overflowY: "auto", padding: "16px",
            display: "flex", flexDirection: "column", gap: "12px",
          }}>
            {messages.map((m, i) => (
              <div
                key={i}
                className="msg-enter"
                style={{
                  display: "flex",
                  justifyContent: m.role === "user" ? "flex-end" : "flex-start",
                }}
              >
                <div style={{
                  maxWidth: "82%",
                  padding: "10px 14px",
                  borderRadius: m.role === "user" ? "16px 16px 4px 16px" : "16px 16px 16px 4px",
                  fontSize: "13px",
                  lineHeight: "1.55",
                  ...(m.role === "user"
                    ? {
                        background: `linear-gradient(135deg, ${GOLD}, ${GOLD_LIGHT})`,
                        color: "#0a0c10",
                        fontWeight: "600",
                      }
                    : {
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(201,168,76,0.15)",
                        color: "rgba(255,255,255,0.82)",
                        fontFamily: "Georgia, serif",
                      }),
                }}>
                  {m.content}
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {loading && (
              <div style={{ display: "flex", justifyContent: "flex-start" }}>
                <div style={{
                  padding: "12px 16px",
                  borderRadius: "16px 16px 16px 4px",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(201,168,76,0.15)",
                  display: "flex", gap: "5px", alignItems: "center",
                }}>
                  {[0, 1, 2].map((i) => (
                    <span key={i} className="dot" style={{
                      display: "inline-block", width: "6px", height: "6px",
                      borderRadius: "50%", background: GOLD,
                    }} />
                  ))}
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Quick suggestions */}
          {messages.length === 1 && (
            <div style={{ padding: "0 16px 10px", display: "flex", gap: "6px", flexWrap: "wrap" }}>
              {["Airport transfer", "Get a quote", "Vehicle options"].map((s) => (
                <button
                  key={s}
                  onClick={() => { setInput(s); inputRef.current?.focus(); }}
                  style={{
                    fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase",
                    padding: "5px 12px", borderRadius: "100px",
                    border: `1px solid rgba(201,168,76,0.35)`,
                    color: GOLD, background: "transparent", cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={e => e.target.style.background = "rgba(201,168,76,0.1)"}
                  onMouseLeave={e => e.target.style.background = "transparent"}
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div style={{
            padding: "12px 16px",
            borderTop: "1px solid rgba(201,168,76,0.12)",
            display: "flex", gap: "10px", alignItems: "flex-end", flexShrink: 0,
            background: "rgba(255,255,255,0.02)",
          }}>
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Ask about transfers, pricing..."
              rows={1}
              style={{
                flex: 1, resize: "none", background: "transparent",
                border: "none", outline: "none",
                color: "rgba(255,255,255,0.85)",
                fontSize: "13px", lineHeight: "1.5",
                fontFamily: "inherit",
                maxHeight: "80px", overflowY: "auto",
              }}
              onInput={(e) => {
                e.target.style.height = "auto";
                e.target.style.height = Math.min(e.target.scrollHeight, 80) + "px";
              }}
            />
            <button
              onClick={sendMessage}
              disabled={!input.trim() || loading}
              style={{
                width: "36px", height: "36px", borderRadius: "50%", flexShrink: 0,
                background: input.trim() && !loading
                  ? `linear-gradient(135deg, ${GOLD}, ${GOLD_LIGHT})`
                  : "rgba(255,255,255,0.06)",
                border: "none", cursor: input.trim() && !loading ? "pointer" : "not-allowed",
                display: "flex", alignItems: "center", justifyContent: "center",
                transition: "all 0.25s",
                boxShadow: input.trim() && !loading ? `0 0 16px rgba(201,168,76,0.4)` : "none",
              }}
            >
              <svg width="15" height="15" viewBox="0 0 20 20" fill="none">
                <path d="M3 10L17 3l-7 7 7 7-14-7z" fill={input.trim() && !loading ? "#0a0c10" : "rgba(255,255,255,0.25)"} />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
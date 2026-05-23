import { ChevronLeft, FileText, ChevronRight, Camera, Mic, Send } from "lucide-react";
import { MAvatar, ChatBubble, AudioBubble, DateDivider } from "./shared";

type Props = { t: (k: string) => string };

export function MobileScreenChatMeeting({ t }: Props) {
  return (
    <div className="w-full h-full flex flex-col bg-white">
      <div className="flex-shrink-0 border-b border-line/70 px-3 py-2 flex items-center gap-2">
        <ChevronLeft className="w-4 h-4 text-ink/65" />
        <div className="flex-1 text-center -ml-4">
          <div className="font-display text-[13px] leading-tight">Bérenger Garnier</div>
          <div className="text-[9px] text-ink/50 inline-flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            {t("m_online")}
          </div>
        </div>
        <MAvatar initials="BG" color="from-night to-ink" size={26} />
      </div>

      <div className="mx-3 mt-2 rounded-xl bg-ink/[0.04] border border-line/70 p-2 flex items-center gap-2 flex-shrink-0">
        <div className="w-6 h-6 rounded-md bg-night/85 text-gold flex items-center justify-center">
          <FileText className="w-3 h-3" />
        </div>
        <span className="text-[10px] font-medium text-ink/85 flex-1 truncate">{t("chat_view_project")} · {t("m_chat2_role")}</span>
        <ChevronRight className="w-3 h-3 text-ink/30" />
      </div>

      <div className="flex-1 overflow-hidden px-3 pt-2 pb-1 flex flex-col gap-1.5">
        <DateDivider label={t("m_date_earlier")} />
        <ChatBubble side="left">{t("m2_msg_a1")}</ChatBubble>
        <ChatBubble side="right">{t("m2_msg_b1")}</ChatBubble>
        <DateDivider label={t("m_today")} />
        <ChatBubble side="left">{t("m2_msg_a2")}</ChatBubble>
        <ChatBubble side="right">{t("m2_msg_b2")}</ChatBubble>
        <ChatBubble side="left">{t("m2_msg_a3")}</ChatBubble>
        <ChatBubble side="right" mono>{t("m2_msg_b3")}</ChatBubble>
        <AudioBubble side="left" duration="0:24" />
      </div>

      <div className="flex-shrink-0 border-t border-line/70 bg-white px-3 py-2 flex items-center gap-2">
        <Camera className="w-4 h-4 text-ink/45" />
        <Mic className="w-4 h-4 text-ink/45" />
        <div className="flex-1 h-7 rounded-full bg-ink/[0.04] flex items-center px-3 text-[10px] text-ink/40">{t("m_chat_compose")}</div>
        <div className="w-7 h-7 rounded-full bg-ink/[0.04] flex items-center justify-center">
          <Send className="w-3 h-3 text-ink/55" />
        </div>
      </div>
    </div>
  );
}

// global.d.ts
import React from "react";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "df-messenger": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        "agent-id"?: string;
        "chat-title"?: string;
        "language-code"?: string;
        "intent"?: string;
        "minimized"?: string;
      };
      "df-messenger-toggle": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}

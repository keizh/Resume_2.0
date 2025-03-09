import React from "react";
import { Typography, Button, Tooltip } from "@material-tailwind/react";
import { useCopyToClipboard } from "usehooks-ts";
import { CheckIcon, DocumentDuplicateIcon } from "@heroicons/react/24/outline";

export default function ClipboardWithTooltip({ txt }) {
  const [_, copy] = useCopyToClipboard();
  const [copied, setCopied] = React.useState(false);

  return (
    <div>
      <Tooltip content={copied ? "Copied" : "Copy"}>
        <Button
          onMouseLeave={() => setCopied(false)}
          onClick={() => {
            copy(txt);
            setCopied(true);
          }}
          className={`flex items-center gap-x-3 px-4 py-2.5 lowercase `}
        >
          <Typography
            className="border-r border-gray-400/50 pr-3 font-normal"
            variant="small"
          >
            {txt}
          </Typography>
          {copied ? (
            <CheckIcon className="h-4 w-4 text-white" />
          ) : (
            <DocumentDuplicateIcon className="h-4 w-4 text-white" />
          )}
        </Button>
      </Tooltip>
    </div>
  );
}

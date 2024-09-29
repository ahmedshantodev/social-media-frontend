import EmojiPicker from "emoji-picker-react";
import React, { useEffect, useState } from "react";

const EmojiMenu = ({
  inputRef,
  inputData,
  setInputData,
  emojiStyle,
  searchDisabled,
  className,
}) => {
  const [cursorPosition, setCursorPosition] = useState();

  const handleEmojiClick = (e) => {
    const emoji = e.emoji;

    const ref = inputRef.current;
    ref.focus();

    // problem
    const start = inputData.substring(0, ref.selectionStart);
    const end = inputData.substring(ref.selectionStart);

    setInputData(start + emoji + end);
    setCursorPosition(start.length + emoji.length);
  };

  useEffect(() => {
    inputRef.current.selectionEnd = cursorPosition;
  }, [cursorPosition]);

  return (
    <EmojiPicker
      onEmojiClick={handleEmojiClick}
      emojiStyle={emojiStyle}
      searchDisabled={searchDisabled}
      previewConfig={{
        showPreview: false,
      }}
      className={className}
    />
  );
};

export default EmojiMenu;

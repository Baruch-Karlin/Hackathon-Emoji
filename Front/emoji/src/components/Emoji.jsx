let mocId = [];

const Emoji = () => {
  return (
    <div className="emojies">
      <p className="emojies_text">What is your guess?</p>
      <div className="btns">
        <div className="btns__row">
          <img
            src="https://res.cloudinary.com/baruch-karlin/image/upload/v1622630427/emoji/Very_Happy_Emoji_Free_Download_IOS_Emojis_h6zbkv.png"
            alt="Very_happy"
            id="0"
          />
          <img
            src="https://res.cloudinary.com/baruch-karlin/image/upload/v1622630436/emoji/Surprised_Emoji_Free_Download_IOS_Emojis_c82vrj.png"
            id="1"
            alt="Suprised"
          />
          <img
            src="https://res.cloudinary.com/baruch-karlin/image/upload/v1622630435/emoji/Cold_Sweat_Emoji_Free_Download_IOS_Emojis_eedtaz.png"
            id="2"
            alt="Contentment"
          />
          <img
            src="https://res.cloudinary.com/baruch-karlin/image/upload/v1622630432/emoji/Tears_Of_Joy_Emoji_Free_Download_iPhone_Emojis_zujnye.png"
            id="3"
            alt="Excitement "
          />
        </div>
        <div className="btns__row">
          <img
            src="https://res.cloudinary.com/baruch-karlin/image/upload/v1622630426/emoji/Grimacing_Emoji_Download_iPhone_Emojis_p9rcoa.png"
            alt="anger"
            id="4"
          />
          <img
            src="https://res.cloudinary.com/baruch-karlin/image/upload/v1622630433/emoji/Omg_Emoji_Free_Download_iPhone_Emojis_vuedti.png"
            id="5"
            alt="Disgust"
          />
          <img
            src="https://res.cloudinary.com/baruch-karlin/image/upload/v1622630433/emoji/Fearful_Emoji_Download_iPhone_Emojis_ommcwp.png"
            id="6"
            alt="Fear"
          />
          <img
            src="https://res.cloudinary.com/baruch-karlin/image/upload/v1622630431/emoji/Very_Sad_Emoji_Free_Download_iPhone_Emojis_in_PNG_pqkpte.png"
            id="7"
            alt="Sad "
          />
        </div>
      </div>
    </div>
  );
};

export default Emoji;

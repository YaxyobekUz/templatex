import emojis from "../data/emojis";

export default () => {
  const getRandomEmoji = () => {
    const randomIndex = Math.floor(Math.random() * emojis.length);
    return emojis[randomIndex];
  };

  return { emojis, getRandomEmoji };
};

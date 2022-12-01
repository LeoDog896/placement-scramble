const input = document.querySelector<HTMLTextAreaElement>("#input");
if (!input) throw Error("Element #input not found");

const output = document.querySelector<HTMLTextAreaElement>("#output")
if (!output) throw Error("Element #output not found")

input.addEventListener("input", () => {
  const value = input.value;

  output.value = value.replaceAll(/\b\w(\w+)\w\b/g, (word) => {
    const jumbledMiddle = word
      .substring(1, word.length - 1)
      .split("")
      .sort(() => (Math.random() > 0.5) ? 1 : -1)
      .join("")
    return word[0] + jumbledMiddle + word[word.length - 1]
  })
})
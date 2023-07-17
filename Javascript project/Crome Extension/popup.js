const btn = document.querySelector(".changeColorBtn");
const colorGrid = document.querySelector(".colorGrid");
const colorValue = document.querySelector(".colorValue");

btn.addEventListener("click", async () => {
  chrome.storage.sync.get("color", ({color}) => {
    console.log("color", color);
  });
  //   console.log("clicked");
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript(
    {
      target: { tabId: tab.id },
      function: pickColor,
    },
    async (injectionResults) => {
      const [data] = injectionResults;
      if (data.result) {
        const color = data.result.sRGBHex;
        colorGrid.style.backgroundColor = color;
        colorValue.innerText = color;
        try {
          await navigator.clipboard.writeText(color);
        } catch (error) {
          console.error(error);
        }
      }
      //   console.log(injectionResults);
    }
  );
});

async function pickColor() {
  // console.log("script working");

  try {
    // picker
    const eyeDropper = new EyeDropper();
    return await eyeDropper.open();
    // console.log(selectedColor);
  } catch (error) {
    console.log(error);
  }
}

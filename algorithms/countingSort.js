async function countingSort() {
  const ele = document.querySelectorAll(".bar");
  let maxValue = 0;

  // Find the maximum value in the array
  for (let i = 0; i < ele.length; i++) {
    if (hasPressedStop) {
      return;
    }
    const value = parseInt(ele[i].style.height);
    if (value > maxValue) {
      maxValue = value;
    }
  }

  // Create a counting array with length equal to the maximum value
  const count = new Array(maxValue + 1).fill(0);

  // Increment the count of each value in the input array
  for (let i = 0; i < ele.length; i++) {
    if (hasPressedStop) {
      return;
    }
    const value = parseInt(ele[i].style.height);
    count[value]++;
    ele[i].style.background = "cyan";
    await delayTime(delay);
  }

  // Update the input array with the sorted values
  let j = 0;
  for (let i = 0; i <= maxValue; i++) {
    if (hasPressedStop) {
      return;
    }
    while (count[i] > 0) {
      if (hasPressedStop) {
        return;
      }
      ele[j].style.height = `${i}px`;
      count[i]--;
      j++;
      ele[j - 1].style.background = "green";
      await delayTime(delay);
    }
  }
}

const countingSortBtn = document.querySelector(".countingSort");
countingSortBtn.addEventListener("click", async function () {
  hasPressedStop = false;
  disableSortingBtn();
  disableSizeSlider();
  disableNewArrayBtn();
  enableStopSortingBtn();
  await countingSort();
  if (hasPressedStop == true) {
    disableSpeedSlider();
  } else {
    enableSortingBtn();
    enableSizeSlider();
  }
  enableNewArrayBtn();
  disableStopSortingBtn();
});
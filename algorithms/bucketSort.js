async function bucketSort() {
  const ele = document.querySelectorAll(".bar");

  // Find the maximum element and calculate bucket size
  let maxValue = -Infinity;
  for (let i = 0; i < ele.length; i++) {
    if (parseInt(ele[i].style.height) > maxValue) {
      maxValue = parseInt(ele[i].style.height);
    }
  }
  const bucketSize = Math.ceil(maxValue / ele.length);

  // Create empty buckets
  const buckets = new Array(ele.length);
  for (let i = 0; i < buckets.length; i++) {
    buckets[i] = [];
  }

  // Add elements to buckets
  for (let i = 0; i < ele.length; i++) {
    if (hasPressedStop) {
      return;
    }
    const bucketIndex = Math.floor(parseInt(ele[i].style.height) / bucketSize);
    buckets[bucketIndex].push(ele[i]);
    ele[i].style.background = "yellow";
    await delayTime(delay);
  }

  // Sort buckets and merge into the original array
  let k = 0;
  for (let i = 0; i < buckets.length; i++) {
    if (hasPressedStop) {
      return;
    }
    if (buckets[i].length > 0) {
      insertion(buckets[i]);
      for (let j = 0; j < buckets[i].length; j++) {
        ele[k] = buckets[i][j];
        ele[k].style.background = "green";
        k++;
        await delayTime(delay);
      }
    }
  }
  enableSortingBtn();
  enableSizeSlider();
  enableNewArrayBtn();
}

const bucketSortbtn = document.querySelector(".bucketSort");
bucketSortbtn.addEventListener('click', async function () {
  hasPressedStop = false;
  disableSortingBtn();
  disableSizeSlider();
  disableNewArrayBtn();
  enableStopSortingBtn();
  await bucketSort();
  if (hasPressedStop == true) {
    disableSpeedSlider();
  } else {
    enableSortingBtn();
    enableSizeSlider();
  }
  enableNewArrayBtn();
  disableStopSortingBtn();
});
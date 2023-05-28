async function radixSort() {
    const ele = document.querySelectorAll(".bar");
    
    // Find the maximum number to know the number of digits
    let maxNum = getMax(ele);
    
    // Do counting sort for every digit. Note that instead
    // of passing digit number, exp is passed. exp is 10^i
    // where i is current digit number
    for (let exp = 1; Math.floor(maxNum/exp) > 0; exp *= 10) {
      await countingSort(ele, exp);
    }
  }
  
  function getMax(arr) {
    let max = parseInt(arr[0].style.height);
    for (let i = 1; i < arr.length; i++) {
      const val = parseInt(arr[i].style.height);
      if (val > max) {
        max = val;
      }
    }
    return max;
  }
  

function getMaxDigits(ele) {
    let maxDigits = 0;
    for (let i = 0; i < ele.length; i++) {
        const numDigits = ele[i].style.height.length;
        if (numDigits > maxDigits) {
            maxDigits = numDigits;
        }
    }
    return maxDigits;
}

const radixSortbtn = document.querySelector(".radixSort");
radixSortbtn.addEventListener('click', async function () {
    hasPressedStop = false;
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    enableStopSortingBtn();
    await radixSort();
    if (hasPressedStop == true) {
        disableSpeedSlider();
    } else {
        enableSortingBtn();
        enableSizeSlider();
    }
    enableNewArrayBtn();
    disableStopSortingBtn();
});

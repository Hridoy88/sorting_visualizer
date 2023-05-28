
async function shellSort() {
    const ele = document.querySelectorAll(".bar");
    let gap = Math.floor(ele.length / 2);
    while (gap > 0) {
        if (hasPressedStop) {
            return;
        }
        for (let i = gap; i < ele.length; i++) {
            if (hasPressedStop) {
                return;
            }
            let j = i;
            const current = parseInt(ele[i].style.height);
            while (j >= gap && parseInt(ele[j - gap].style.height) > current) {
                if (hasPressedStop) {
                    return;
                }
                ele[j].style.background = 'cyan';
                ele[j - gap].style.background = 'cyan';
                await delayTime(delay);
                swap(ele[j], ele[j - gap]);
                ele[j].style.background = '#e43f5a';
                ele[j - gap].style.background = '#e43f5a';
                j -= gap;
            }
            ele[j].style.height = `${current}px`;
        }
        gap = Math.floor(gap / 2);
    }
}

const shellSortbtn = document.querySelector(".shellSort");
shellSortbtn.addEventListener('click', async function () {
    hasPressedStop = false;

    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    enableStopSortingBtn();
    await shellSort();
    if (hasPressedStop == true) {
        disableSpeedSlider();
    } else {
        enableSortingBtn();
        enableSizeSlider();
    }
    enableNewArrayBtn();
    disableStopSortingBtn();
});

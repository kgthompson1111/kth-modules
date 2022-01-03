    const menuSlider = (triggerID, childID) => {
        function show() {
            childElement.style.transform = 'translate(0px, 120px)';
        }

        function hide() {
            childElement.style.transform = '';
        }

        const triggerElement = document.getElementById(triggerID);
        console.log(triggerElement);

        const childElement = document.getElementById(childID);
        console.log(childElement);

        const childHeight = childElement.scrollHeight;
        console.log(childHeight);

        // set base state
        triggerElement.style.overflowTop = 'hidden';

        childElement.style.position = 'relative';
        childElement.style.top = `-${childHeight}px`;

        // transition and pointer events on childElement
        childElement.style.transition = 'transform 250ms ease-in-out';
        childElement.style.pointerEvents = 'none';

        // mouseover eventListener - show
        triggerElement.addEventListener('mouseover', show);

        // mouseexit eventListener - hide
        triggerElement.addEventListener('mouseout', hide);
    }

export { menuSlider }

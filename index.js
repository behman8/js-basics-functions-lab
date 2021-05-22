function distanceFromHqInBlocks(pickUp) {
    if (pickUp <= 42) {
        return 42 - pickUp;
    } else {
        return pickUp - 42;
    }
}

function distanceFromHqInFeet(pickUp) {
    const blocksToFeet = distanceFromHqInBlocks(pickUp) * 264;
    return blocksToFeet;
}

function distanceTravelledInFeet(sBlock, eBlock) {
    if (sBlock <= eBlock) {
        return (eBlock - sBlock) * 264;
    } else {
        return (sBlock - eBlock) * 264;
    }
}

function calculatesFarePrice(sBlock, eBlock) {
    const distanceFt = distanceTravelledInFeet(sBlock, eBlock);
    if (distanceFt <= 400) {
        return 0;
    } else if (distanceFt <= 2000) {
        return (distanceFt - 400) * .02;
    } else if (distanceFt <= 2500) {
        return 25;
    } else if (distanceFt > 2500) {
        return 'cannot travel that far';
    }
}
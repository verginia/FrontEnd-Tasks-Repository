function checkAngle() {
    const angle = document.getElementById("angle").value;

    let angleType;

    if (angle > 0 && angle < 90) {
        angleType = " an Acute angle";
    } else if (angle == 90) {
        angleType = " a Right angle";
    } else if (angle > 90 && angle < 180) {
        angleType = " an Obtuse angle";
    } else if (angle == 180) {
        angleType = " a Straight angle";
    } else {
        angleType = "an Invalid angle";
    }

    document.getElementById("result").innerText = `The angle is ${angleType}.`;
}
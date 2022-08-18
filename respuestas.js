function resultado() {
    var p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p111, p124,p133,p141,p152, p163,p173,p181,p191, p202, nota;

    // 1a pregunta
    if (document.getElementById('p11').checked==true) {p1=1}
    else {p1=0}
    // 2a pregunta
    if (document.getElementById('p24').checked==true) {p2=1}
    else {p2=0}
    // 3a pregunta
    if (document.getElementById('p33').checked==true) {p3=1}
    else {p3=0}
    // 4a pregunta
    if (document.getElementById('p41').checked==true) {p4=1}
    else {p4=0}
    // 5a pregunta
    if (document.getElementById('p52').checked==true) {p5=1}
    else {p5=0}
    // 6a pregunta
    if (document.getElementById('p61').checked==true) {p6=1}
    else {p6=0}
    // 7a pregunta
    if (document.getElementById('p73').checked==true) {p7=1}
    else {p7=0}
    // 8a pregunta
    if (document.getElementById('p88').checked==true) {p8=1}
    else {p8=0}
    // 9a pregunta
    if (document.getElementById('p91').checked==true) {p9=1}
    else {p9=0}
    // 10a pregunta
    if (document.getElementById('p01').checked==true) {p10=1}
    else {p10=0}
      // 11 pregunta
        if (document.getElementById('p111').checked==true) {p111=1}
    else {p111=0}
        // 12 pregunta
        if (document.getElementById('p124').checked==true) {p124=1}
    else {p124=0} 
    // 13 pregunta
        if (document.getElementById('p133').checked==true) {p133=1}
    else {p133=0}   
    // 14 pregunta
        if (document.getElementById('p141').checked==true) {p141=1}
    else {p141=0}     
        // 15 pregunta
        if (document.getElementById('p152').checked==true) {p152=1}
    else {p152=0}
        // 16 pregunta
        if (document.getElementById('p163').checked==true) {p163=1}
    else {p163=0}
            // 17 pregunta
        if (document.getElementById('p173').checked==true) {p173=1}
    else {p173=0}
           // 18 pregunta
        if (document.getElementById('p181').checked==true) {p181=1}
    else {p181=0}
     // 19 pregunta
        if (document.getElementById('p191').checked==true) {p191=1}
    else {p191=0}
    // 20 pregunta
     if (document.getElementById('p202').checked==true) {p202=1}
    else {p202=0}


    nota=p1+p2+p3+p4+p5+p6+p7+p8+p9+p10+p111+p124+p133+p141+p152+p163+p173+p181+p191+p202;
    alert(" Aciertos: " + nota);
    window.location = 'cuestionario.html'
}
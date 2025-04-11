if (!localStorage.getItem('alertShown')) {

    // Alert anzeigen
    alert('Willkommen bei den "Stadtwerken Stettbeck" Ihr Ansprechpartner der Stettbecker Versorgungs- und Verkehrsgesellschaft! Wir möchten Sie darüber aufmerksam machen, dass es sich bei der folgenden Seite um ein fiktives Unternehmen handelt. Das genannte Unternehmen wurde auf dem FiveM Server "Nordnetzwerk.eu" gegründet. Mit dieser Nachricht möchten wir nur nochmal ausdrücklich darauf hinweisen, dass es sich hierbei um KEIN reales Unternehmen handelt. Die Inhalte dienen alle lediglich der fiktiven Welt. Wir bedanken uns für Ihr Verständnis.');
  
    // Setze den Wert im Local Storage, um anzuzeigen, dass der Alert bereits gezeigt wurde
    localStorage.setItem('alertShown', true);
}
        // Åpne modal når knappen trykkes
        document.addEventListener('DOMContentLoaded', function() {
            // console.log('DOMContentLoaded - Initialiserer skjemaer');
            
            const btn = document.getElementById('bestillTaksjekkBtn');
            const modal = document.getElementById('taksjekkModal');
            if (btn && modal) {
                btn.addEventListener('click', function(e) {
                    e.preventDefault();
                    // console.log('Bestill taksjekk knapp klikket');
                    $("#taksjekkModal").modal('show');
                });
            }

            // Bestill taksjekk form
            const form = document.getElementById('taksjekkForm');
            if (form) {
                // Fjern mailto action - vi håndterer det med JavaScript
                form.removeAttribute('action');
                form.removeAttribute('method');
                form.removeAttribute('enctype');
                
                form.addEventListener('submit', function(e) {
                    e.preventDefault();
                    
                    if (form.checkValidity()) {
                        // Hent skjemadata
                        const navn = document.getElementById('taksjekkNavn').value;
                        const telefon = document.getElementById('taksjekkTelefon').value;
                        const adresse = document.getElementById('taksjekkAdresse').value;
                        const email = document.getElementById('taksjekkEmail').value;
                        
                        // Sanitize inputs to prevent injection attacks
                        const sanitizedNavn = DOMPurify.sanitize(navn, {ALLOWED_TAGS: [], ALLOWED_ATTR: []});
                        const sanitizedTelefon = DOMPurify.sanitize(telefon, {ALLOWED_TAGS: [], ALLOWED_ATTR: []});
                        const sanitizedAdresse = DOMPurify.sanitize(adresse, {ALLOWED_TAGS: [], ALLOWED_ATTR: []});
                        const sanitizedEmail = DOMPurify.sanitize(email, {ALLOWED_TAGS: [], ALLOWED_ATTR: []});
                        
                        // Bygg mailto URL med sanitisert data
                        const subject = encodeURIComponent('Bestilling av gratis taksjekk');
                        const body = encodeURIComponent(
                            'Navn: ' + sanitizedNavn + '\n' +
                            'Telefon: ' + sanitizedTelefon + '\n' +
                            'Adresse: ' + sanitizedAdresse + '\n' +
                            'E-post: ' + sanitizedEmail
                        );
                        const mailtoURL = 'mailto:salg@takansvar.no?subject=' + subject + '&body=' + body;
                        
                        // Åpne mail-klient
                        window.location.href = mailtoURL;
                        
                        // Vis bekreftelse
                        document.getElementById('taksjekkBekreftelse').style.display = 'block';
                        document.getElementById('taksjekkBekreftelse').innerText = 'Takk for din bestilling! Vi tar kontakt snarest.';
                        form.reset();
                        setTimeout(function() {
                            $("#taksjekkModal").modal('hide');
                            document.getElementById('taksjekkBekreftelse').style.display = 'none';
                        }, 2000);
                    }
                });
            }
            
            // Kontakt spørsmål form
            const kontaktForm = document.getElementById('kontaktSpmForm');
            if (kontaktForm) {
                // Fjern mailto action - vi håndterer det med JavaScript
                kontaktForm.removeAttribute('action');
                kontaktForm.removeAttribute('method');
                kontaktForm.removeAttribute('enctype');
                
                kontaktForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    
                    if (kontaktForm.checkValidity()) {
                        // Hent skjemadata
                        const navn = document.getElementById('kontaktSpmNavn').value;
                        const telefon = document.getElementById('kontaktSpmTelefon').value;
                        const email = document.getElementById('kontaktSpmEmail').value;
                        
                        // Sanitize inputs to prevent injection attacks
                        const sanitizedNavn = DOMPurify.sanitize(navn, {ALLOWED_TAGS: [], ALLOWED_ATTR: []});
                        const sanitizedTelefon = DOMPurify.sanitize(telefon, {ALLOWED_TAGS: [], ALLOWED_ATTR: []});
                        const sanitizedEmail = DOMPurify.sanitize(email, {ALLOWED_TAGS: [], ALLOWED_ATTR: []});
                        
                        // Bygg mailto URL med sanitisert data
                        const subject = encodeURIComponent('Forespørsel - Bli kontaktet');
                        const body = encodeURIComponent(
                            'Navn: ' + sanitizedNavn + '\n' +
                            'Telefon: ' + sanitizedTelefon + '\n' +
                            'E-post: ' + sanitizedEmail
                        );
                        const mailtoURL = 'mailto:kontakt@takansvar.no?subject=' + subject + '&body=' + body;
                        
                        // Åpne mail-klient
                        window.location.href = mailtoURL;
                        
                        // Vis bekreftelse
                        document.getElementById('kontaktSpmBekreftelse').style.display = 'block';
                        document.getElementById('kontaktSpmBekreftelse').innerText = 'Takk! Vi tar kontakt snarest.';
                        kontaktForm.reset();
                        setTimeout(function() {
                            $("#kontaktSpmModal").modal('hide');
                            document.getElementById('kontaktSpmBekreftelse').style.display = 'none';
                        }, 2000);
                    }
                });
            }
        });
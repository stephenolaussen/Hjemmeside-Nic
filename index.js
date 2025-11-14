        // Åpne modal når knappen trykkes
        document.addEventListener('DOMContentLoaded', function() {
            var btn = document.getElementById('bestillTaksjekkBtn');
            var modal = document.getElementById('taksjekkModal');
            if(btn && modal) {
                btn.addEventListener('click', function(e) {
                    e.preventDefault();
                    $("#taksjekkModal").modal('show');
                });
            }

            // Enkel validering og bekreftelse
            var form = document.getElementById('taksjekkForm');
            if(form) {
                form.addEventListener('submit', function(e) {
                    e.preventDefault();
                    if(form.checkValidity()) {
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
        });
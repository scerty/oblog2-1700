
    function kjor(){
        $("#feilAntall").text("");
        $("#feilFornavn").text("");
        $("#feilEtternavn").text("");
        $("#feilTel").text("");
        $("#feilEpost").text("");

        let billett={
            film: $("#filmer").val(),
            antall: $("#antall").val(),
            fornavn: $("#fornavn").val(),
            etternavn: $("#etternavn").val(),
            tlf: $("#tel").val(),
            epost: $("#epost").val()
        }


        if(billett.fornavn==="" || billett.etternavn===""|| billett.tlf==="" || billett.epost==="" ||Number(billett.antall)===0 || billett.film==="" ) {
            if(Number(billett.antall)===0) {
                $("#feilAntall").html("Må vare større enn null".fontcolor("red"));
            }
            if (billett.fornavn === "") {
                $("#feilFornavn").html("Må skrive noe inn i fornavn".fontcolor("red"));
            }
            if (billett.etternavn === "") {
                $("#feilEtternavn").html("Må skrive noe i etternavn".fontcolor("red"));
            }
            if (billett.tlf === "") {
                $("#feilTel").html("Må skrive noe i telefonnu".fontcolor("red"));
            }
            if (billett.epost === "") {
                $("#feilEpost").html("Må skrive noe i epost".fontcolor("red"));
            }
        }else{

            $.post("/lagre", billett, function(){
                hentAlle();
            });
            $("#filmer").val("");
            $("#fornavn").val("");
            $("#etternavn").val("");
            $("#antall").val(0);
            $("#tel").val("");
            $("#epost").val("");

        }

    }

    function hentAlle() {
        $.get( "/hentAlle", function( data ) {
            formaterData(data);
        });
    }

    function formaterData(billetter){
        let ut = "<table class='table'><tr><th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telnr</th><th>Epost</th></tr>";
        for (let billett of billetter){
            ut+="<tr><td>"+billett.film+"</td><td>"+billett.antall+"</td><td>"+billett.fornavn+"</td>" +
                "<td>"+billett.etternavn+"</td><td>"+billett.tlf+"</td><td>"+billett.epost+"</td></tr>";
        }
        ut+="</table>";
        $("#billetter").html(ut);
    }

    function slett(){
        $.get( "/slettAlle", function() {
            hentAlle();
        });
    }

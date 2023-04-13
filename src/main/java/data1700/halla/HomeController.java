package data1700.halla;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class HomeController {

    @Autowired
    private BilletterRepository rep;

    @PostMapping("/lagre")
    public void lagreKunde(Billetter innBillett){
        rep.lagreBilletter(innBillett);
    }
    @GetMapping("/hentAlle")
    public List<Billetter> hentAlle(){
        return rep.hentAlleBilletter();
    }
    @GetMapping("/slettAlle")
    public void slettAlle(){
        rep.stett();
    }


}

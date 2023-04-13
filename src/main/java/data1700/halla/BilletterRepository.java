package data1700.halla;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class BilletterRepository {
    @Autowired
    private JdbcTemplate db;

    public void lagreBilletter(Billetter innBillett){
        String sql="INSERT INTO Billetter (film, antall, fornavn, etternavn, tlf, epost) VALUES (?,?,?,?,?,?)";
        db.update(sql, innBillett.getFilm(),innBillett.getAntall(),innBillett.getFornavn(),innBillett.getEtternavn(),innBillett.getTlf(),innBillett.getEpost());

    }
    public List<Billetter> hentAlleBilletter(){
        String sql="SELECT * FROM Billetter";
        List<Billetter> alleBilletter = db.query(sql, new BeanPropertyRowMapper<>(Billetter.class));
        return alleBilletter;
    }
    public void stett(){
        String sql="DELETE FROM Billetter";
        db.update(sql);
    }

}

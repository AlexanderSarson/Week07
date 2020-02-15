package facades;

import entities.Movie;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.TypedQuery;
import utils.EMF_Creator;

/**
 *
 * Rename Class to a relevant name Add add relevant facade methods
 */
public class FacadeMovie {

    private static FacadeMovie instance;
    private static EntityManagerFactory emf;

    //Private Constructor to ensure Singleton
    private FacadeMovie() {
    }

    /**
     *
     * @param _emf
     * @return an instance of this facade class.
     */
    public static FacadeMovie getFacadeMovie(EntityManagerFactory _emf) {
        if (instance == null) {
            emf = _emf;
            instance = new FacadeMovie();
        }
        return instance;
    }

    private EntityManager getEntityManager() {
        return emf.createEntityManager();
    }

    public Movie getMovieByID(long id) {
        EntityManager em = getEntityManager();
        try {
            return em.find(Movie.class, id);
        } finally {
            em.close();
        }
    }

    public void addMovie(Movie movie) {
        EntityManager em = getEntityManager();
        try {
            em.getTransaction().begin();
            em.persist(movie);
            em.getTransaction().commit();
        } finally {

        }
    }

    public List<Movie> getMoviesByName(String name) {
        EntityManager em = getEntityManager();
        try {
            TypedQuery<Movie> tp = em.createQuery("SELECT m FROM Movie m WHERE m.name = :name", Movie.class);
            tp.setParameter("name", name);
            return tp.getResultList();
        } finally {
            em.close();
        }
    }
    
    public List<Movie> getAllMovies() {
        EntityManager em = getEntityManager();
        try {
            TypedQuery<Movie> tp = em.createQuery("SELECT m FROM Movie m", Movie.class);
            return tp.getResultList();
        } finally {
            em.close();
        }
    }
    public int getMovieCount(){
        EntityManager em = getEntityManager();
        try{
            TypedQuery<Movie> tp = em.createQuery("SELECT m FROM Movie m", Movie.class);
            return tp.getResultList().size();
        } finally {
            em.close();
        }
    }

    public static void main(String[] args) {
        EntityManagerFactory EMF = EMF_Creator.createEntityManagerFactory(
                "pu",
                "jdbc:mysql://localhost:3306/movie",
                "dev",
                "ax2",
                EMF_Creator.Strategy.CREATE);
        FacadeMovie FACADE = FacadeMovie.getFacadeMovie(EMF);
        String actor1 = "actor1";
        String actor2 = "actor2";
        String actor3 = "actor2";
        Movie movie1 = new Movie(2000, "movie1", new String[]{actor1,actor2,actor3});
        Movie movie2 = new Movie(1920, "movie2", new String[]{actor1,actor2,actor3});
        Movie movie3 = new Movie(1820, "movie3", new String[]{actor1,actor2,actor3});
        EntityManager em = EMF.createEntityManager();
        System.out.println(em.createQuery("SELECT max(m.id) FROM Movie m", Movie.class).getFirstResult());
        FACADE.addMovie(movie1);
        FACADE.addMovie(movie2);
        FACADE.addMovie(movie3);
    }

}

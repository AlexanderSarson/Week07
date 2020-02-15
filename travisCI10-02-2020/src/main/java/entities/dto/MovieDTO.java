/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package entities.dto;

import entities.Movie;

/**
 *
 * @author root
 */
public class MovieDTO {
    private String name;
    private int year;
    private String[] actors;

    public MovieDTO(Movie movie) {
        this.name = movie.getName();
        this.year = movie.getYear();
        this.actors = movie.getActors();
    }

    public String[] getActors() {
        return actors;
    }

    public void setActors(String[] actors) {
        this.actors = actors;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }
    
    
    
}

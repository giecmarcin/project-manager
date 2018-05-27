package com.app.projectmanager.repository;

import com.app.projectmanager.model.Person;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface PersonRepository extends CrudRepository<Person, Long> {

    @Query("select p from Person p")
    List<Person> getPeople();
}

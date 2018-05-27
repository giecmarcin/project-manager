package com.app.projectmanager.service;

import com.app.projectmanager.model.Person;
import com.app.projectmanager.repository.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class PersonService {

    @Autowired
    private PersonRepository personRepository;

    public List<Person> findAllPeaople(){
        return personRepository.getPeople();
    }

    public void addPerson(Person person){
        personRepository.save(person);
    }
}

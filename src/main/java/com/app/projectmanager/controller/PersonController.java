package com.app.projectmanager.controller;

import com.app.projectmanager.model.Person;
import com.app.projectmanager.service.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/person")
public class PersonController {

    @Autowired
    private PersonService personService;

    @GetMapping("/all")
    public ResponseEntity<?> getPeople(){
        return ResponseEntity.ok(personService.findAllPeaople());
    }

    @PostMapping("/add")
    public ResponseEntity<?> addPerson(@RequestBody Person person){
        personService.addPerson(person);
        return ResponseEntity.ok(person);
    }
}

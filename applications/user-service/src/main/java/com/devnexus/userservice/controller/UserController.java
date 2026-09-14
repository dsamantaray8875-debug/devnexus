package com.devnexus.userservice.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/users")
public class UserController {

    @GetMapping
    public String getUsers() {
        return "DevNexus User Service is running!";
    }

    @GetMapping("/health")
    public String health() {
        return "User Service Health: UP";
    }
}

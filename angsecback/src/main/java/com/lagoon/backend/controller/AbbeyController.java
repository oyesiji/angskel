package com.lagoon.backend.controller;


import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;



@RestController
@RequestMapping("/abbey")
public class AbbeyController {
	
	  @RequestMapping(value = "/testing", method = RequestMethod.GET)
	    public String retrieve () {
		  
		  
		  return "Abiodun Oyesiji";
	  }

}

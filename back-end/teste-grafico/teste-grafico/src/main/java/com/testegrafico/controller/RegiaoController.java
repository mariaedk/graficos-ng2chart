package com.testegrafico.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.testegrafico.dto.RegiaoDTO;
import com.testegrafico.service.RegiaoService;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/regiao")
public class RegiaoController {
	
	@Autowired
	RegiaoService service;
	
	@GetMapping
	public List<RegiaoDTO> getAll()
	{
		return service.getAll();
	}

	@PostMapping
	public ResponseEntity<RegiaoDTO> addNota(@RequestBody RegiaoDTO cidade)
	{
		return new ResponseEntity<>(service.add(cidade), HttpStatus.CREATED);
	}
	
	@GetMapping("/habitantes")
	public List<Long> pegarQtdHabitantes()
	{
		return service.listaQtdHabitantes();
	}
	
	@GetMapping("/nomesRegioes")
	public List<String> pegarNomesRegioe()
	{
		return service.listaNomeRegioes();
	}
}

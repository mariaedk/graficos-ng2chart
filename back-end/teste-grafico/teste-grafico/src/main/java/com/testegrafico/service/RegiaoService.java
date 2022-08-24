package com.testegrafico.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.testegrafico.dto.RegiaoDTO;
import com.testegrafico.entity.Regiao;
import com.testegrafico.repository.RegiaoRepository;

@Service
public class RegiaoService {
	@Autowired // anotação para injetar classe/interface
	RegiaoRepository repository;
	
	public List<RegiaoDTO> getAll()
	{
		List<Regiao> notas = repository.findAll();
		
		List<RegiaoDTO> listaNotasDTO = new ArrayList();
		
		// populando a listaNotasDTO com notas 
		for (Regiao regiao : notas) 
		{
			listaNotasDTO.add(regiao.getDTO());
		}
		return listaNotasDTO;
	}
	
	public RegiaoDTO add(RegiaoDTO nota)
	{
		return repository.save(nota.convertToEntity()).getDTO();
	}
	
	public List<Long> listaQtdHabitantes()
	{
		List<Regiao> regioes = repository.findAll();
		List<Long> listaQtdHabitantes = new ArrayList<>();
		for (Regiao regiao : regioes) 
		{
			listaQtdHabitantes.add(regiao.getQtdHabitantes());
		}
		return listaQtdHabitantes;
	}
	
	public List<String> listaNomeRegioes()
	{
		List<Regiao> regioes = repository.findAll();
		List<String> nomesRegioes = new ArrayList<>();
		
		for (Regiao regiao : regioes)
		{
			nomesRegioes.add(regiao.getNome());
		}
		
		return nomesRegioes;
	}
}

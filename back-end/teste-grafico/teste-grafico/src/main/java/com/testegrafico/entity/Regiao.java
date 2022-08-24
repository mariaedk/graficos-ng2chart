package com.testegrafico.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

import com.testegrafico.dto.RegiaoDTO;

@Entity
public class Regiao 
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	private String nome;
	private Long qtdHabitantes;
	
	
	public Regiao() {
		super();
	}
	
	public RegiaoDTO getDTO()
	{
		return new RegiaoDTO(this.getId(), this.getNome(), this.getQtdHabitantes());
	}

	public Regiao(Integer id, String nome, Long qtdHabitantes) {
		super();
		this.id = id;
		this.nome = nome;
		this.qtdHabitantes = qtdHabitantes;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public Long getQtdHabitantes() {
		return qtdHabitantes;
	}

	public void setQtdHabitantes(Long qtdHabitantes) {
		this.qtdHabitantes = qtdHabitantes;
	}
	
	
}

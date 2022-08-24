package com.testegrafico.dto;

import java.io.Serializable;

import com.testegrafico.entity.Regiao;

public class RegiaoDTO implements Serializable
{

	private static final long serialVersionUID = 1L;
	private Integer id;
	private String nome;
	private Long qtdHabitantes;
	
	public Regiao convertToEntity()
	{
		return new Regiao(this.getId(), this.getNome(), this.getQtdHabitantes());
	}
	
	public RegiaoDTO() {
		super();
	}
	public RegiaoDTO(Integer id, String nome, Long qtdHabitantes) {
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

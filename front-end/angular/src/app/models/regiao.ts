export class Regiao
{
  id?: number;
  nome?: string;
  qtdHabitantes?: number;

  constructor(obj: Partial<Regiao>)
  {
    Object.assign(this, obj);
  }
}

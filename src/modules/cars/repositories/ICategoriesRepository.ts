import { Category } from "../models/Category";

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

interface ICategoriesRepository {
  list(): Category[];
  findByName(name: string): Category;
  create({ name, description }: ICreateCategoryDTO): Category;
}

export { 
  ICategoriesRepository,
  ICreateCategoryDTO
}

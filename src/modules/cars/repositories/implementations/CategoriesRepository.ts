import { Category } from '../../models/Category';
import { ICategoriesRepository, ICreateCategoryDTO } from '../ICategoriesRepository'

class CategoriesRepository implements ICategoriesRepository {
  private categories: Category[] = [];

  private static INSTANCE: CategoriesRepository;

  private constructor() {
    this.categories = [];
  }

  public static getInstance(): CategoriesRepository {
    if(!CategoriesRepository.INSTANCE) {
      CategoriesRepository.INSTANCE = new CategoriesRepository();
    }

    return CategoriesRepository.INSTANCE;
  }

  public list(): Category[] {
    return this.categories;
  }

  public create({ name, description }: ICreateCategoryDTO): Category {
    const category = new Category(name, description);

    this.categories.push(category);

    return category;
  }

  public findByName(name: string): Category {
    const category = this.categories.find(category => category.name === name);

    return category;
  }
}

export { CategoriesRepository };

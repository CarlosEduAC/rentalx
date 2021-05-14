import { ISpecificationsRepository, ICreateSpecificationDTO } from '../ISpecificationsRepository'
import { Specification } from "../../models/Specification";

class SpecificationsRepository implements ISpecificationsRepository {
  private specifications: Specification[] = [];

  private static INSTANCE: SpecificationsRepository;

  private constructor() {
    this.specifications = [];
  }

  public static getInstance(): SpecificationsRepository {
    if(!SpecificationsRepository.INSTANCE) {
      SpecificationsRepository.INSTANCE = new SpecificationsRepository();
    }

    return SpecificationsRepository.INSTANCE;
  }

  public findByName(name: string): Specification {
    const specification = this.specifications.find(specification => specification.name === name);

    return specification;
  }

  public create({ name, description }: ICreateSpecificationDTO): Specification {
    const specification = new Specification(name, description);

    this.specifications.push(specification);

    return specification;
  }
}

export { SpecificationsRepository }
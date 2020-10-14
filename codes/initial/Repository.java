@Repository
public interface UserRepository extends CrudRepository<UserEntity, Long> {

    Boolean existsByCpf(String cpf);
}

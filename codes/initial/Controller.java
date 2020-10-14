@RestController
@RequestMapping(UserController.RESOURCE)
public class UserController {

    private final UserService userService;
    static final String RESOURCE = "/user";

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping
    public ResponseEntity<Void> save(@RequestBody CreateUserDTO dto) {
        UserEntity savedUser = userService.save(dto.toEntity());
        return ResponseEntity
            .created(URI.create(RESOURCE + "/" + savedUser.getId()))
            .header("Location-id", savedUser.getId().toString())
            .build();
    }

    @GetMapping("/{id}")
    public ResponseEntity<UserDTO> getById(@PathVariable("id") Long id) {
        Optional<UserEntity> user = userService.getById(id);
        return user
            .map(UserDTO::fromEntity)
            .map(ResponseEntity::ok)
            .orElse(ResponseEntity.notFound().build());
    }
}
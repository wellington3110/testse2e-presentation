@RestControllerAdvice
public class ExceptionHandlerController extends ResponseEntityExceptionHandler {

    @ExceptionHandler(ValidationException.class)
    public ResponseEntity<ErrorDTO> validationException(ValidationException exception) {
        return ResponseEntity.badRequest().body(exception.getError());
    }
}
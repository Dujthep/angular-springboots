package springbootwithag4.tutorial.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import springbootwithag4.tutorial.domain.Employee;

import java.util.List;

public interface EmployeRepository extends JpaRepository<Employee,Integer> {

    @Query("select u from Employee u where u.firstName like %?1% and u.lastName like %?2%")
    List<Employee> findByName(String firstName, String lastName);
}

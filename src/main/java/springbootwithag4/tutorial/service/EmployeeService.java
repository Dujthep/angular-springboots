package springbootwithag4.tutorial.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import springbootwithag4.tutorial.domain.Employee;
import springbootwithag4.tutorial.repository.EmployeRepository;

import java.util.List;

@Service
public class EmployeeService {

    @Autowired
    private EmployeRepository employeeRepository;

    public List<Employee> getEmployee(){
        return employeeRepository.findAll();
    }
    public List<Employee> findByName(Employee employee){
        return  employeeRepository.findByName(employee.getFirstName(),employee.getLastName());
    }
    public void addEmployee(Employee employee){
        employeeRepository.save(employee);
    }
    public void deleteEmployee(Integer id){
        employeeRepository.delete(id);
    }
    public void editEmployee(Integer id, Employee employee){
        employeeRepository.save(employee);
    }
}

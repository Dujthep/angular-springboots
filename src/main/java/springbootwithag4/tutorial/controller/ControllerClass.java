package springbootwithag4.tutorial.controller;


import springbootwithag4.tutorial.domain.Employee;
import springbootwithag4.tutorial.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;
import java.util.List;

@RestController
public class ControllerClass {

    @Autowired
    private EmployeeService employeeService;

    @RequestMapping(value = "/post_add", method = RequestMethod.POST)
    public void  saveCompany_JSON(@RequestBody Employee employee) {
        System.out.print("java add data");
        employeeService.addEmployee(employee);
//        return returnValue;
    }
    @RequestMapping(value = "/get_data", method = RequestMethod.GET)
    public List<Employee> getAllData(){
        return employeeService.getEmployee();
    }
    @RequestMapping(value = "/delete_data/{id}", method = RequestMethod.DELETE)
    public List<Employee> deleteDataById(@PathVariable Integer id){
        employeeService.deleteEmployee(id);
        return this.getAllData();
    }
    @RequestMapping(value = "/search_data", method = RequestMethod.POST)
    public List<Employee> searchEmployee(@RequestBody Employee employee){
        return employeeService.findByName(employee);
    }
    @RequestMapping(value = "/edit_data/{id}", method = RequestMethod.PUT)
    public List<Employee> editData(@PathVariable Integer id,@RequestBody Employee employee){
        employeeService.editEmployee(id,employee);
        return this.getAllData();
    }

}
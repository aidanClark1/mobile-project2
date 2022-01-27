<div class="offcanvas offcanvas-start" tabindex="-1" id="edit_employee_offcanvas" aria-labelledby="offcanvasExampleLabel">
    <div class="offcanvas-body">
        <div class="row align-items-center justify-content-between mb-4 px-1">
            <h4 class="col text-start offcanvas-title">Edit Employee Record</h5>
                <p class="col text-end">
                    <button type="button" class="btn-close text-reset rounded-0 p-0" data-bs-dismiss="offcanvas" aria-label="Close"><i class="fas fa-times"></i></button>

                </p>

        </div>
        <form method="post" id="editEmployee" class="was-validated">
            <div class="mb-3">
                <label class="form-label">First Name</label>

                <input type="text" name="firstName" id="firstNameEdit" size="15" maxlength="20" autocomplete="off" placeholder="First Name" class="form-control is-valid" required>

                <div class="invalid-feedback">
                    Please enter first name.
                </div>
            </div>

            <div class="mb-3">
                <label class="form-label">Last Name</label>

                <input type="text" name="lastName" id="lastNameEdit" value="" size="15" maxlength="20" autocomplete="off" placeholder="Last Name" class="form-control is-valid" required>

                <div class="invalid-feedback">
                    Please enter last name.
                </div>

            </div>

            <div class="mb-3">
                <label class="form-label">Job Title</label>

                <input type="text" name="jobTitle" id="jobTitleEdit" value="" size="15" maxlength="20" autocomplete="off" placeholder="Job Title" class="form-control is-valid" required>

                <div class="invalid-feedback">Please enter a job title.</div>

            </div>
            <div class="mb-3">
                <label class="form-label">Email</label>

                <input type="email" name="email" id="emailEdit" size="20" maxlength="60" value="" placeholder="Email Address" autocomplete="off" class="form-control is-valid" required>

                <div class="invalid-feedback">Please enter a valid email.</div>

            </div>
            <div class="mb-3">
                <label class="form-label">Department</label>

                <select id="editSelect" value="" name="addDepartment" class="form-select" required>

                </select>
                <div class="invalid-feedback">Please choose a department.</div>

            </div>




            <button id="editSubmit" name="submit" type="submit" class="btn btn-primary">Submit</button>


        </form>
    </div>

</div>
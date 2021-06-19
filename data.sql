INSERT INTO companies(handle, name, num_employees) VALUES
  ('apple', 'apple inc', 1000),
  ('nike', 'nike inc', 200),
  ('rithm', 'rithm school', 10),
  ('starbucks', 'starbucks inc', 500);

INSERT INTO jobs(title, salary, company_handle) VALUES
  ('engineer', 100000, 'apple'),
  ('plumber', 120000, 'apple'),
  ('barista', 200000, 'nike');

INSERT INTO users( username, password, email) VALUES
  ('admin', 'admin', 'admin@tets.com'),
  ('normal', 'password', 'normal@tets.com'),
  ('test', 'password', 'test@tets.com'); 
  
INSERT INTO applications(username, job_id, state) VALUES
  ('test', 1, 'applied'),
  ('test', 2, 'rejected'),
  ('test', 3, 'applied');

  
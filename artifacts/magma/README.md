# Magma evidence artifact

The script checks the exact quartic equation, nonsingularity over `Q`, and the
log-Chern arithmetic used in the lecture.

Local command if Magma is installed:

```bash
magma -b artifacts/magma/verify_quartic_case.m
```

Verified remote route for this project:

```bash
ssh bnaskrecki@lts-faculty.wmi.amu.edu.pl \
  '/opt/magma/current/magma -b' < artifacts/magma/verify_quartic_case.m
```

The session did not expose a callable `lts-faculty` skill, so the documented
SSH route is used directly.

The captured successful output is in `verification-output.txt`.

Q := Rationals();
P3<x0,x1,x2,x3> := ProjectiveSpace(Q, 3);
f := x0^4 - x0*x1^3 - x2^4 + x2*x3^3;
X := Scheme(P3, f);

assert IsNonsingular(X);

n := 24;
t2 := 0;
t3 := 32;
t4 := 0;
c1bar2 := -2*n + 2*t2 + 5*t3 + 8*t4;
c2bar := 24 - 2*n + t2 + 2*t3 + 3*t4;
G := 10*n - 2*t2 - t3;
slope := c1bar2 / c2bar;

assert c1bar2 eq 112;
assert c2bar eq 40;
assert G eq 208;
assert slope eq 14/5;
assert slope gt 8/3;

print "PASS: quartic is nonsingular over Q";
print "profile", <n,t2,t3,t4>;
print "c1bar2", c1bar2;
print "c2bar", c2bar;
print "slope", slope;
print "G", G;
quit;

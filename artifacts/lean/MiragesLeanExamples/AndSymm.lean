namespace MiragesLeanExamples

/-- A minimal Curry-Howard example used in the Falenty material. -/
theorem and_symm (a b : Prop) : a ∧ b → b ∧ a := by
  intro h
  exact ⟨h.right, h.left⟩

end MiragesLeanExamples
